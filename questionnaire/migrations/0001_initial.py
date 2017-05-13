# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-05-13 07:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_id', models.CharField(blank=True, max_length=80, null=True)),
                ('question', models.CharField(blank=True, max_length=80, null=True)),
                ('question_rus', models.CharField(blank=True, max_length=280, null=True)),
            ],
            options={
                'db_table': 'questions',
            },
        ),
        migrations.CreateModel(
            name='QuestionType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(blank=True, max_length=80, null=True)),
            ],
            options={
                'db_table': 'question_types',
            },
        ),
        migrations.AddField(
            model_name='question',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='questionnaire.QuestionType'),
        ),
    ]
