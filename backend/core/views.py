from django.shortcuts import render

'''
@author Guri
This is the Core view.
It renders the index.html through backend.
'''

def front(request):
    context = { }
    return render(request, "index.html", context)