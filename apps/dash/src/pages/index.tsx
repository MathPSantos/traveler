import { Heading } from '../components/elements'
import {
  Header,
  Main,
  Layout,
} from '../components/layout'

export default function Docs() {
  return (
    <Layout>
      <Header>
        <Heading>Cidades</Heading>
      </Header>
      <Main>
        <Heading className="mt-12">
          Just a test
        </Heading>
        <Heading>Just a test</Heading>
      </Main>
    </Layout>
  )
}
