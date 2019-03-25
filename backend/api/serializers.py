from rest_framework import serializers
from .models import Service


class ServiceSerializer(serializers.ModelSerializer):
    '''Serializeris'''
    class Meta:
        model = Service
        fields = ('name', 'description', 'availability')
        #fields = '__all__'
