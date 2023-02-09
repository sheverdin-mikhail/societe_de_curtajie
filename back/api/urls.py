from django.urls import path, include
from . import views


urlpatterns = [
    path('services_list', views.ServicesList.as_view(), name='services_list')
]
