#!/bin/bash
sudo ufw disable;
gatsby develop -H 0.0.0.0 -p 8000

# make sure you run this when you're done
sudo ufw enable;
