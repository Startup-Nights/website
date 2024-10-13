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
	data, err := os.ReadFile("/home/joergmis/Downloads/registrations.csv")
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

	// needed: 0 1 5 6 8 35
	required := func(i int) bool {
		return i == 0 ||
			i == 1 ||
			i == 5 ||
			i == 6 ||
			i == 8 ||
			i == 35
	}

	for i, row := range output.Data {
		for j := range row {
			if !required(j) {
				output.Data[i][j] = ""
			}
		}
	}

	var out bytes.Buffer

	if err := json.NewEncoder(&out).Encode(&output); err != nil {
		log.Fatal(err)
	}

	fmt.Println(out.String())
}
