from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, "home.html")

def charts(request):
    return render(request, "charts.html")

def table(request):
    return render(request, "table.html")

def add(request):
    return render(request, "add.html")

def update(request):
    return render(request, "update.html")

def view(request):
    return render(request, "view.html")