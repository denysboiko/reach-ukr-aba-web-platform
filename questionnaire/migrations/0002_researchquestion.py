# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-05-13 08:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionnaire', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResearchQuestion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rq_id', models.CharField(blank=True, max_length=30, null=True)),
                ('research_question', models.CharField(blank=True, max_length=280, null=True)),
            ],
            options={
                'db_table': 'research_questions',
            },
        ),
    ]
