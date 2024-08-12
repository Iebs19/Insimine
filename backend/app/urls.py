from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, ContentBlockListCreateView, ContentBlockDetailView,  TechStackViewSet, ClientViewSet, FormDataCreateView,CaseStudyViewSet, WhitePaperListCreateView, WhitePaperDetailView, TestimonialDetailView, TestimonialListCreateView, ServiceViewSet

router = DefaultRouter()
router.register(r'blogs', BlogViewSet)
router.register(r'case-studies', CaseStudyViewSet)
router.register(r'techstack', TechStackViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'client', ClientViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('content-blocks/', ContentBlockListCreateView.as_view(), name='contentblock-list-create'),
    path('content-blocks/<int:pk>/', ContentBlockDetailView.as_view(), name='contentblock-detail'),
    path('form-submit/', FormDataCreateView.as_view(), name='form-submit'),
    path('whitepapers/', WhitePaperListCreateView.as_view(), name='whitepaper-list-create'),
    path('whitepapers/<int:pk>/', WhitePaperDetailView.as_view(), name='whitepaper-detail'),
    path('testimonials/', TestimonialListCreateView.as_view(), name='testimonial-list-create'),
    path('testimonials/<int:pk>/', TestimonialDetailView.as_view(), name='testimonial-detail'),
]
