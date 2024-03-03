import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export interface IProduct {
  readonly title: string;
  readonly price: string;
  readonly stock: number;
  readonly rating: number;
  readonly category: string;
}

export function ProductsTable({ products }: { products: IProduct[] }) {
  return (
    <Table>
      <TableCaption>List of products available</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <TableRow>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.rating}</TableCell>
            <TableCell>{product.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
