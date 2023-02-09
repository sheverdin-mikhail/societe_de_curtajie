from django.shortcuts import render
from rest_framework import generics

from .serializers import ServicesSerializer
from .models import Service



class ServicesList(generics.ListAPIView):

    serializer_class = ServicesSerializer
    queryset = Service.objects.all()