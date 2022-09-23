#!/bin/bash

dir=`dirname $0`
echo $dir

psql -U development template1 < db/reset.sql
