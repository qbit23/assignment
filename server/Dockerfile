FROM golang:1.19-alpine

WORKDIR /app

COPY go.* .
RUN go mod download 

COPY . .

RUN go build -o main .

EXPOSE 8000

CMD ["./main"]
