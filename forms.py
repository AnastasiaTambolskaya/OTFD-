from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.utils.translation import gettext_lazy as _
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    username = forms.CharField(
        label="",
        widget=forms.TextInput(attrs={'placeholder': _('Иван Иванович Иванушка')}),
        strip=False,
        error_messages={'required': ''}
    )
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'placeholder': _('Email')}),
        label='',
        error_messages={'required': 'Custom email error message.'}
    )
    password1 = forms.CharField(
        label="",
        strip=False,
        widget=forms.PasswordInput(attrs={'placeholder': _('Пароль')}),
        error_messages={'required': 'Custom password error message.'}
    )
    password2 = forms.CharField(
        label="",
        strip=False,
        widget=forms.PasswordInput(attrs={'placeholder': _('Повторите пароль')}),
        error_messages={'required': 'Custom password confirmation error message.'}
    )

    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = UserCreationForm.Meta.fields + ('email',)
