docker build -t jamesangel/alltunes-backend ./backend 

docker push jamesangel/alltunes-backend

docker build -t jamesangel/alltunes-room-service ./room-service

docker push jamesangel/alltunes-room-service