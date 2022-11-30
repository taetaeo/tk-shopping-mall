import React, { FC, ReactNode } from "react";
import { useTable } from "react-table";
import styled from "styled-components";

type ColumnsType = {
  accessor: string;
  Header: string;
};

type OrderHistoryType = {
  name?: string;
  brand?: string;
  image_url: string;
  discount: number;
  amount: number;
  price?: number;
};
type DataType = {
  orderDate: number;
  orderHistory: OrderHistoryType[];
  orderNumber: number;
  payment: number;
};
type TableType = {
  columns: ColumnsType[] | any;
  data: DataType[] | any;
};

const Table: FC<TableType> = (props: TableType): JSX.Element => {
  const { columns, data } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // console.log("table-rows", rows);

  return (
    <StyledTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeader {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableHeader>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <TableData {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </TableData>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
  margin: 1rem 0;
  width: 100%;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TableHead = styled.thead`
  height: 3rem;
`;

const TableBody = styled.tbody`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 1rem;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #000;
  color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 1rem;
  font-size: 1rem;
`;
