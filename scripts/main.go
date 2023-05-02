package main

import (
	"flag"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"strings"
)

func main() {
	// try to standardize the name of images
	dir := flag.String("dir", "./", "path to base directory of the images")
	flag.Parse()

	err := filepath.Walk(*dir, func(path string, info fs.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if info.IsDir() {
			return nil
		}

		filename := info.Name()
		filename = strings.ToLower(filename)
		filename = strings.ReplaceAll(filename, " ", "-")
		filename = strings.ReplaceAll(filename, "_", "-")
		filename = strings.ReplaceAll(filename, "é", "e")
		filename = strings.ReplaceAll(filename, "à", "a")
		filename = strings.ReplaceAll(filename, "à", "a")
		filename = strings.ReplaceAll(filename, "ö", "oe")
		filename = strings.ReplaceAll(filename, "ö", "oe")
		filename = strings.ReplaceAll(filename, "ü", "ue")
		filename = strings.ReplaceAll(filename, "ß", "ss")

		data, err := os.ReadFile(filepath.Join(*dir, info.Name()))
		if err != nil {
			return err
		}

		if err := os.WriteFile(filepath.Join(*dir, filename), data, 0644); err != nil {
			return err
		}

		os.Remove(info.Name())

		return nil
	})

	if err != nil {
		log.Fatal(err)
	}
}
