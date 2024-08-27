package main

import (
	"bytes"
	"encoding/csv"
	"encoding/json"
	"fmt"
	"log"
	"os"
)

func main() {
	data, err := os.ReadFile("/home/mischa/Downloads/registrations.csv")
	if err != nil {
		log.Fatal(err)
	}

	reader := csv.NewReader(bytes.NewBuffer(data))

	records, err := reader.ReadAll()
	if err != nil {
		log.Fatal(err)
	}

	output := struct {
		Data [][]string `json:"data"`
	}{}

	output.Data = records

	var out bytes.Buffer

	if err := json.NewEncoder(&out).Encode(&output); err != nil {
		log.Fatal(err)
	}

	fmt.Println(out.String())
}
