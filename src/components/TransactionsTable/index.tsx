import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolviento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento de website</td>
            <td>10/10/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$ 1.100,00</td>
            <td>Casa</td>
            <td>01/10/2021</td>
          </tr>
          {/* <tr>
            <td>Desenvolviento de website</td>
            <td>R$ 12.000,00</td>
            <td>Desenvolvimento de website</td>
            <td>10/10/2021</td>
          </tr> */}
        </tbody>
      </table>
    </Container>
  )
}