'''Does things'''
# api/resources.py

from tastypie.resources import ModelResource
from tastypie.authorization import Authorization
from api.models import Service

class ServiceResource(ModelResource):
    """Class between a URL and a Service object"""
    class Meta:
        """Meta data"""
        queryset = Service.objects.all()
        resources_name = 'service'
        #filtering = { 'title', 'contains'}
        authorization = Authorization()
    
    
