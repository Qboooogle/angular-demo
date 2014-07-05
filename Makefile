#install : sudo make install
#start : sudo make start
#stop  : sudo make stop

start:
	nohup node app.js > /dev/null &
	echo 'please wait a second...'
	sleep 2
stop:
	sudo pkill -f angulardemo
#######################################

