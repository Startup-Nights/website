#!/bin/bash

for i in ./{content}/**/*.{tsx,ts,json}; do
    echo $i
    lvim $i \
    -c ':LspStart' \
    -c ':lua vim.api.nvim_create_autocmd("LspAttach", {
        callback = function(args)
            vim.lsp.buf.format({timeout_ms=10000})
            vim.cmd("wq")
        end,
    })'
done
