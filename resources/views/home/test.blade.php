@extends('layouts.master')

@section('title', 'Page Title')



@section('content')
  @foreach($names as $name)
  {{$name}}
  @endforeach
@endsection