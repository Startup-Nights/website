#!/bin/sh -l

# https://vercel.com/docs/rest-api/endpoints#list-deployments
# DEPLOYMENT_URL=$(curl --insecure -H "Content-type: application/json" -H "Authorization: Bearer $1" "https://api.vercel.com/v6/deployments" | jq -r '.deployments[0].url')
DEPLOYMENT_URL=$(curl -X GET "https://api.vercel.com/v6/deployments" -H "Authorization: Bearer $1" | jq -r '.deployments[0].url')
echo "=> using deployment url: ${DEPLOYMENT_URL}"

# install the dependencies (important for typescript)
npm install

export CYPRESS_BASE_URL=${DEPLOYMENT_URL}
npx cypress run --browser chrome --e2e