export class Produits {
    produitID!: number;
    nomProduit!: string;
    description!: string;
    prix!: number;
    stock!: number;
  
    constructor(nomProduit: string, description: string, prix: number, stock: number, produitID?: number) {
      if (produitID) {
        this.produitID = produitID;
      }
      this.nomProduit = nomProduit;
      this.description = description;
      this.prix = prix;
      this.stock = stock;
    }
}
