'''Paslaugos modelis'''
from django.db import models

# api/models.py
class Service(models.Model):
    """Paslaugos modelis/klase"""
    title = models.CharField(max_length=100)
    description = models.TextField()
    availability = models.BooleanField(default=False)
    priceFrom = models.DecimalField(decimal_places=2, max_digits=6)
    priceTo = models.DecimalField(decimal_places=2, max_digits=6)
    place = models.TextField()
    class Meta:
        db_table = "service"


def __str__(self):
    return '%s %s %s %s %s %s' % \
         (self.title, self.description, self.availability, self.priceFrom, self.priceTo, self.place)

