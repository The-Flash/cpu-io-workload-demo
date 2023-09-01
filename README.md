# CPU and IO workload demo

## CPU intensive server

This server exposes an endpoint to resize an unsplash image

To start server on port 8000

```sh
yarn start:cpuload
```

### Testing

```sh
curl http://localhost:8000/resize-image
```

Load testing

Make 1000 concurrent request to simulate load

```sh
npm install -g loadtest
loadtest -n 1000 -c 20 http://localhost:8000/resize-image
```

## I/O intensive server

This exposes an endpoint to insert 10000 records in a postgresql table

To start server on port 8001

```sh
yarn start:ioload
```

### Testing

```sh
curl http://localhost:8000/data
```

Load testing

Make 1000 concurrent request to simulate load

```sh
npm install -g loadtest
loadtest -n 1000 -c 20 http://localhost:8000/resize-image
```
