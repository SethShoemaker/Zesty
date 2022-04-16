@component('mail::message')
# Hello!

We received a password reset request for your account.
Click the link to reset your password.

@component('mail::button', ['url' => $url])
Reset Password
@endcomponent

This password reset link will expire in {{ $count }} minutes.
@endcomponent