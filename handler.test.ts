import { order } from "./handler";

// const list = [
//   "SP12345Silva, Maria",
//   "João DiasSP-67890",
//   "TO 11123Eduardo Pereira",
//   "22345SPSantos, Marcos",
//   "CamilaCosta 33456-SP",
//   "John Rambo 44567-PR",
//   "Maclane, John RS-55678",
// ];

describe("------Order  -------", () => {
  test("TESTE -> ordenação", async () => {
    const list = ["hyan", "joao", "augusto", "bernardo", "jorge", "helena"];

    order(list);
    console.log("Resposta: ", list);
    const res = ["augusto", "bernardo", "helena", "hyan", "joao", "jorge"];
    expect(list).toEqual(res);
  });

  test("TESTE -> ordenação", async () => {
    const list = ["hyan", "joao", "augusto", "bernardo", "jorge", "helena"];

    order(list);
    const res = ["augusto", "helena", "bernardo", "hyan", "joao", "jorge"];
    expect(list).not.toEqual(res);
  });
});
