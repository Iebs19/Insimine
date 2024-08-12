from django.contrib import admin
from django import forms
from .models import Blog, Service, TechStack, Client, ContentBlock, CaseStudy, WhitePaper, Testimonial
from django.contrib.contenttypes.admin import GenericTabularInline


class ContentBlockInline(GenericTabularInline):
    model = ContentBlock
    extra = 1
    fields = ['block_type', 'text', 'image', 'order', 'text_type']
    ct_field = 'content_type'
    ct_fk_field = 'content_id'

    def get_formset(self, request, obj=None, **kwargs):
        formset = super().get_formset(request, obj, **kwargs)
        if obj:
            for form in formset.forms:
                if form.instance.block_type == ContentBlock.TEXT:
                    form.fields['text_type'].widget = forms.Select(choices=ContentBlock.TEXT_TYPE_CHOICES)
                else:
                    form.fields['text_type'].widget = forms.HiddenInput()
        return formset

class ContentBlockForm(forms.ModelForm):
    class Meta:
        model = ContentBlock
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance and self.instance.block_type == ContentBlock.TEXT:
            self.fields['text_type'].widget = forms.Select(choices=ContentBlock.TEXT_TYPE_CHOICES)
        else:
            self.fields['text_type'].widget = forms.HiddenInput()

class BaseContentAdmin(admin.ModelAdmin):
    inlines = [ContentBlockInline]
    list_display = ('title', 'created_at', 'updated_at')

@admin.register(Blog)
class BlogAdmin(BaseContentAdmin):
    pass

@admin.register(CaseStudy)
class CaseStudyAdmin(BaseContentAdmin):
    pass

@admin.register(Service)
class ServiceAdmin(BaseContentAdmin):
    pass

@admin.register(TechStack)
class TechStackAdmin(admin.ModelAdmin):
    list_display = ('name', 'desc')
    search_fields = ('name',)

@admin.register(WhitePaper)
class WhitePaperAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    search_fields = ('name',)

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'image')
    search_fields = ('name',)

@admin.register(Testimonial)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('author', 'content')
    search_fields = ('author',)
