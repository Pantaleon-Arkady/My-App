<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logout success!'
        ]);
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'namemail' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $validated['namemail'])
            ->orWhere('username', $validated['namemail'])
            ->first();

        if (!$user || !Hash::check($validated['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'login' => true,
            'message' => 'Login successful',
            'user' => $user->only('id','username','email')
        ]);
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string|min:3|max:50|unique:users,username',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'username' => $validated['username'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'register' => true,
            'message' => 'User registered successfully',
            'user' => $user->only('id','username','email'),
        ], 201);
    }
}