# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-01-31 23:56
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('theWall', '0003_auto_20190131_1633'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='userid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='message', to='users.User'),
        ),
    ]
