import { useState } from "react";
import { Button, Page, Layout } from "@shopify/polaris";
import { TitleBar } from '@shopify/app-bridge-react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';



const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])

  console.log(products)

  const handleSelection = (resources) => {
    const idsFromResources = resources.selection.map(product => product.id)
    setOpen(false)
    setProducts(idsFromResources)
  }

  const emptyState = false

  const CREATE_SCRIPT_TAG = gql`
    mutation scriptTagCreate($input: ScriptTagInput!) {
        scriptTagCreate(input: $input) {
            scriptTag {
                id
            }
            userErrors {
                field
                message
            }
        }
    }
`;

  const [createScripts] = useMutation(CREATE_SCRIPT_TAG);

  return (
    <Page>
      <Layout>
        Admin Side UI
        <Button
          primary
          size="slim"
          type="submit" onClick={() => {
            createScripts({
              variables: {
                input: {
                  src: "https://8d70-142-115-39-32.ngrok.io/script.js",
                  displayScope: "ALL",
                },
              },
              // refetchQueries: [{ query: QUERY_SCRIPTTAGS }],
            });
          }}
        >
          Create Script Tag
        </Button>
      </Layout>
    </Page>
  )
}

export default Index;
