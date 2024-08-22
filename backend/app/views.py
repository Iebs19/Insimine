from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from .models import Blog, Service, TechStack, Client, ContentBlock, FormData, CaseStudy, WhitePaper, Testimonial,Event
from .serializers import BlogSerializer, ServiceSerializer, TechStackSerializer, ClientSerializer, ContentBlockSerializer, FormDataSerializer, CaseStudySerializer, WhitePaperSerializer, TestimonialSerializer, EventSerializer


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class CaseStudyViewSet(viewsets.ModelViewSet):
    queryset = CaseStudy.objects.all()
    serializer_class = CaseStudySerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class ContentBlockViewSet(viewsets.ModelViewSet):
    queryset = ContentBlock.objects.all()
    serializer_class = ContentBlockSerializer

class FormDataViewSet(viewsets.ModelViewSet):
    queryset = FormData.objects.all()
    serializer_class = FormDataSerializer

class TechStackViewSet(viewsets.ModelViewSet):
    queryset = TechStack.objects.all()
    serializer_class = TechStackSerializer

class WhitePaperViewSet(viewsets.ModelViewSet):
    queryset = WhitePaper.objects.all()
    serializer_class = WhitePaperSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer