from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from .models import Blog, Service, TechStack, Client, ContentBlock, FormData, CaseStudy, WhitePaper, Testimonial
from .serializers import BlogSerializer, ServiceSerializer, TechStackSerializer, ClientSerializer, ContentBlockSerializer, FormDataSerializer, CaseStudySerializer, WhitePaperSerializer, TestimonialSerializer


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class CaseStudyViewSet(viewsets.ModelViewSet):
    queryset = CaseStudy.objects.all()
    serializer_class = CaseStudySerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ContentBlockListCreateView(generics.ListCreateAPIView):
    queryset = ContentBlock.objects.all()
    serializer_class = ContentBlockSerializer

class ContentBlockDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContentBlock.objects.all()
    serializer_class = ContentBlockSerializer

class FormDataCreateView(generics.CreateAPIView):
    queryset = FormData.objects.all()
    serializer_class = FormDataSerializer


class TechStackViewSet(viewsets.ModelViewSet):
    queryset = TechStack.objects.all()
    serializer_class = TechStackSerializer

class WhitePaperListCreateView(generics.ListCreateAPIView):
    queryset = WhitePaper.objects.all()
    serializer_class = WhitePaperSerializer

class WhitePaperDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = WhitePaper.objects.all()
    serializer_class = WhitePaperSerializer

class TestimonialListCreateView(generics.ListCreateAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class TestimonialDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer