
from rest_framework import serializers
from .models import Service, Application

class ServicesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = '__all__'


class ConsultationMailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Application
        fields = '__all__'

class CallSerializer(serializers.ModelSerializer):

    class Meta:
        model = Application
        exclude = ['email']