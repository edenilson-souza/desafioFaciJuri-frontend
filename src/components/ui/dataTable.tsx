import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

export function DataTable({ data, columns }: any) {
    return (
        <Table className='table-auto'>
            <TableHeader>
                <TableRow>
                    {Object.keys(columns).map((column: any, index: any) => (
                        <TableCell key={index}>{columns[column]}</TableCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((row: any, rowIndex: any) => (
                    <TableRow key={rowIndex}>
                        {Object.keys(columns).map((column: any, columnIndex: any) => (
                            <TableCell key={columnIndex}>{typeof columns[column] === "function" ? columns[column](row) : row[column]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
