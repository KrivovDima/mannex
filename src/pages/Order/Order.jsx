import React, {useMemo} from 'react';

import {usePagination, useFilters, useSortBy, useTable} from 'react-table';

import * as S from './styles';

import * as C from '../../styles/components';
import {MainLayout} from "../../layouts/MainLayout";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle";
import {DefaultFilter} from "../../components/TableFilters/DefaultFilter/DefaultFilter";
import {SelectFilter} from "../../components/TableFilters/SelectFilter/SelectFilter";
import {formattingDate} from "../../utils/formattingDate";

export const Order = () => {
    const dataMock = [
        {
            check: 52,
            date: '2021-05-07T09:27:11Z',
            catalog: 'Volkswagen',
            numOrder: 61,
            description: 'Routan',
            amount: 23459,
            price: 27844,
            info: '3VW467AT4CM481323',
            status: 2010,
            delivery: '2021-11-24T00:57:02Z',
        },
        {
            check: 91,
            date: '2021-05-12T16:14:18Z',
            catalog: 'Oldsmobile',
            numOrder: 62,
            description: 'Alero',
            amount: 44450,
            price: 22310,
            info: '1G6AF5S31D0773706',
            status: 2000,
            delivery: '2022-01-02T01:48:12Z',
        },
        {
            check: 16,
            date: '2021-09-16T06:04:35Z',
            catalog: 'Nissan',
            numOrder: 13,
            description: 'NX',
            amount: 18517,
            price: 39508,
            info: '5GAER23748J592249',
            status: 1992,
            delivery: '2021-09-04T14:27:27Z',
        },
        {
            check: 21,
            date: '2021-03-13T13:01:52Z',
            catalog: 'Toyota',
            numOrder: 63,
            description: 'MR2',
            amount: 39579,
            price: 31977,
            info: 'WBAEJ13413A442935',
            status: 1986,
            delivery: '2021-03-12T22:40:27Z',
        },
        {
            check: 14,
            date: '2021-10-01T08:00:55Z',
            catalog: 'Saab',
            numOrder: 99,
            description: '9-7X',
            amount: 13673,
            price: 18084,
            info: '2T3BFREV1DW897279',
            status: 2008,
            delivery: '2021-12-29T14:38:53Z',
        },
        {
            check: 56,
            date: '2021-06-04T12:51:33Z',
            catalog: 'Panoz',
            numOrder: 31,
            description: 'Esperante',
            amount: 45653,
            price: 12730,
            info: 'YV1902FH6D2601952',
            status: 2007,
            delivery: '2021-10-21T17:58:23Z',
        },
        {
            check: 13,
            date: '2021-04-01T17:40:13Z',
            catalog: 'Infiniti',
            numOrder: 26,
            description: 'Q',
            amount: 9441,
            price: 44167,
            info: 'WBAFR9C53DC932335',
            status: 2002,
            delivery: '2021-11-21T00:45:14Z',
        },
        {
            check: 32,
            date: '2021-09-07T17:50:47Z',
            catalog: 'Mercedes-Benz',
            numOrder: 63,
            description: 'CLK-Class',
            amount: 24453,
            price: 45557,
            info: '1G6KD57YX4U903876',
            status: 2000,
            delivery: '2021-09-05T10:34:47Z',
        },
        {
            check: 52,
            date: '2021-05-21T09:40:56Z',
            catalog: 'Jaguar',
            numOrder: 13,
            description: 'X-Type',
            amount: 11775,
            price: 7242,
            info: '1G4HP52K23U583092',
            status: 2004,
            delivery: '2021-01-07T19:25:47Z',
        },
        {
            check: 66,
            date: '2021-12-24T21:46:13Z',
            catalog: 'Kia',
            numOrder: 34,
            description: 'Sorento',
            amount: 39429,
            price: 15708,
            info: 'WDDEJ8GB3AA827114',
            status: 2003,
            delivery: '2021-08-10T19:41:06Z',
        },
        {
            check: 21,
            date: '2021-04-07T11:16:57Z',
            catalog: 'Eagle',
            numOrder: 23,
            description: 'Talon',
            amount: 4180,
            price: 34368,
            info: '2B3CA2CV0AH614610',
            status: 1992,
            delivery: '2021-01-17T09:51:45Z',
        },
        {
            check: 11,
            date: '2021-08-13T06:56:40Z',
            catalog: 'Lamborghini',
            numOrder: 1,
            description: 'Diablo',
            amount: 25613,
            price: 48223,
            info: '1G6DL5EV1A0822904',
            status: 1997,
            delivery: '2021-09-01T07:15:08Z',
        },
        {
            check: 100,
            date: '2021-10-30T13:06:25Z',
            catalog: 'Audi',
            numOrder: 39,
            description: 'S4',
            amount: 48435,
            price: 46785,
            info: '2G4GR5EK2C9512358',
            status: 2004,
            delivery: '2021-01-13T03:36:32Z',
        },
        {
            check: 81,
            date: '2021-11-08T15:24:49Z',
            catalog: 'Lotus',
            numOrder: 46,
            description: 'Esprit',
            amount: 35478,
            price: 15926,
            info: 'WBALW7C57ED774304',
            status: 1986,
            delivery: '2021-05-08T14:37:20Z',
        },
        {
            check: 9,
            date: '2021-12-22T10:10:51Z',
            catalog: 'Chevrolet',
            numOrder: 28,
            description: 'Silverado 1500',
            amount: 42364,
            price: 36227,
            info: 'SAJWA1CZ6E8151913',
            status: 2010,
            delivery: '2021-01-31T06:40:44Z',
        },
        {
            check: 86,
            date: '2021-10-17T05:30:48Z',
            catalog: 'Saturn',
            numOrder: 14,
            description: 'VUE',
            amount: 14054,
            price: 22268,
            info: '2C3CCACG7CH887653',
            status: 2010,
            delivery: '2021-04-22T04:18:21Z',
        },
        {
            check: 84,
            date: '2021-05-15T08:54:07Z',
            catalog: 'Chevrolet',
            numOrder: 36,
            description: 'APV',
            amount: 24878,
            price: 28874,
            info: '1GKS1AE07DR643181',
            status: 1993,
            delivery: '2021-10-04T14:38:49Z',
        },
        {
            check: 20,
            date: '2021-03-28T22:15:22Z',
            catalog: 'MINI',
            numOrder: 100,
            description: 'Cooper',
            amount: 11630,
            price: 25573,
            info: 'JN8AZ1MU0AW751745',
            status: 2007,
            delivery: '2021-06-29T03:05:12Z',
        },
        {
            check: 1,
            date: '2021-05-20T10:46:02Z',
            catalog: 'Audi',
            numOrder: 83,
            description: '100',
            amount: 37267,
            price: 12056,
            info: 'WAUML54B64N072568',
            status: 1992,
            delivery: '2021-12-13T21:22:00Z',
        },
        {
            check: 72,
            date: '2021-04-27T06:49:46Z',
            catalog: 'BMW',
            numOrder: 16,
            description: 'X3',
            amount: 46495,
            price: 47494,
            info: 'WAULT68E54A232369',
            status: 2008,
            delivery: '2021-11-14T00:07:02Z',
        },
        {
            check: 86,
            date: '2021-01-26T21:30:06Z',
            catalog: 'Bentley',
            numOrder: 44,
            description: 'Continental Flying Spur',
            amount: 19188,
            price: 49215,
            info: 'KNADH4A39A6590821',
            status: 2008,
            delivery: '2021-04-01T21:03:15Z',
        },
        {
            check: 87,
            date: '2021-04-15T00:59:51Z',
            catalog: 'Pontiac',
            numOrder: 93,
            description: 'Grand Prix',
            amount: 11058,
            price: 40902,
            info: '1N6AA0CC8BN532817',
            status: 1973,
            delivery: '2021-03-18T00:17:05Z',
        },
        {
            check: 61,
            date: '2021-07-17T21:50:57Z',
            catalog: 'Nissan',
            numOrder: 57,
            description: 'Armada',
            amount: 5113,
            price: 36636,
            info: 'WBSBL93463J772903',
            status: 2010,
            delivery: '2021-11-30T08:41:18Z',
        },
        {
            check: 60,
            date: '2021-05-12T07:34:57Z',
            catalog: 'Dodge',
            numOrder: 4,
            description: 'Ram 2500 Club',
            amount: 33466,
            price: 17324,
            info: '5FPYK1F28DB145801',
            status: 1999,
            delivery: '2021-05-12T01:36:28Z',
        },
        {
            check: 51,
            date: '2021-07-03T02:31:04Z',
            catalog: 'Bentley',
            numOrder: 4,
            description: 'Continental GTC',
            amount: 7875,
            price: 3396,
            info: 'JHMFA3F25BS178543',
            status: 2011,
            delivery: '2021-11-14T16:29:40Z',
        },
        {
            check: 43,
            date: '2021-02-19T10:12:28Z',
            catalog: 'Ford',
            numOrder: 79,
            description: 'Mustang',
            amount: 43316,
            price: 40113,
            info: '1G6DP5EV9A0766716',
            status: 1983,
            delivery: '2021-07-17T09:39:56Z',
        },
        {
            check: 64,
            date: '2021-09-26T14:43:11Z',
            catalog: 'Land Rover',
            numOrder: 75,
            description: 'Defender',
            amount: 38412,
            price: 4598,
            info: '5UXFG2C50CL855856',
            status: 1997,
            delivery: '2021-10-16T01:39:25Z',
        },
        {
            check: 61,
            date: '2021-04-08T07:05:59Z',
            catalog: 'Mazda',
            numOrder: 81,
            description: 'CX-9',
            amount: 22250,
            price: 32064,
            info: '1D7CW3BK2AS203897',
            status: 2008,
            delivery: '2021-02-24T08:43:53Z',
        },
        {
            check: 60,
            date: '2021-08-04T05:51:03Z',
            catalog: 'Oldsmobile',
            numOrder: 11,
            description: 'Alero',
            amount: 15071,
            price: 35080,
            info: '2G4GZ5GV6B9310113',
            status: 1999,
            delivery: '2021-09-28T09:33:42Z',
        },
        {
            check: 88,
            date: '2021-09-07T20:29:22Z',
            catalog: 'Toyota',
            numOrder: 49,
            description: 'Highlander Hybrid',
            amount: 45441,
            price: 6557,
            info: 'YV4852CZXA1258092',
            status: 2007,
            delivery: '2021-07-14T11:03:02Z',
        },
        {
            check: 86,
            date: '2021-12-07T17:00:56Z',
            catalog: 'Nissan',
            numOrder: 67,
            description: 'Rogue',
            amount: 16481,
            price: 26864,
            info: 'JN8AZ2NC3E9138132',
            status: 2009,
            delivery: '2021-04-30T01:30:03Z',
        },
        {
            check: 99,
            date: '2021-06-11T19:59:27Z',
            catalog: 'Chrysler',
            numOrder: 44,
            description: 'PT Cruiser',
            amount: 11815,
            price: 28319,
            info: 'WBAYF4C59FD900667',
            status: 2008,
            delivery: '2021-10-10T11:11:15Z',
        },
        {
            check: 60,
            date: '2021-04-15T22:41:49Z',
            catalog: 'Mercedes-Benz',
            numOrder: 5,
            description: 'E-Class',
            amount: 49482,
            price: 22812,
            info: 'WA1CFBFP9DA941940',
            status: 2003,
            delivery: '2021-12-30T22:05:04Z',
        },
        {
            check: 92,
            date: '2021-11-01T20:21:31Z',
            catalog: 'Mazda',
            numOrder: 48,
            description: '626',
            amount: 43184,
            price: 47791,
            info: 'JM3TB2BA3F0300544',
            status: 1991,
            delivery: '2021-05-16T12:22:47Z',
        },
        {
            check: 46,
            date: '2021-11-14T12:28:59Z',
            catalog: 'Jeep',
            numOrder: 19,
            description: 'Wrangler',
            amount: 24622,
            price: 27665,
            info: '1G4HP57278U514902',
            status: 2012,
            delivery: '2021-10-07T09:58:54Z',
        },
        {
            check: 17,
            date: '2021-11-01T05:51:47Z',
            catalog: 'Mazda',
            numOrder: 93,
            description: 'CX-9',
            amount: 27002,
            price: 25537,
            info: 'WAUMV94E38N069709',
            status: 2010,
            delivery: '2021-03-30T17:51:39Z',
        },
        {
            check: 16,
            date: '2021-09-19T16:28:21Z',
            catalog: 'Mercedes-Benz',
            numOrder: 13,
            description: 'W201',
            amount: 30671,
            price: 35766,
            info: '1G4HP52K234964134',
            status: 1984,
            delivery: '2021-04-19T21:37:25Z',
        },
        {
            check: 79,
            date: '2021-02-08T19:16:52Z',
            catalog: 'Kia',
            numOrder: 61,
            description: 'Rio',
            amount: 18251,
            price: 31787,
            info: '1GD11ZCG6CF505827',
            status: 2013,
            delivery: '2021-08-09T03:32:58Z',
        },
        {
            check: 18,
            date: '2021-12-03T19:45:38Z',
            catalog: 'Isuzu',
            numOrder: 73,
            description: 'Oasis',
            amount: 35754,
            price: 24435,
            info: '3N1BC1CP1CK747721',
            status: 1998,
            delivery: '2021-07-12T15:26:17Z',
        },
        {
            check: 23,
            date: '2021-12-25T11:15:00Z',
            catalog: 'GMC',
            numOrder: 53,
            description: 'Sierra 2500',
            amount: 1813,
            price: 9191,
            info: '1C3CDFAA0FD939957',
            status: 2005,
            delivery: '2021-07-21T07:34:27Z',
        },
        {
            check: 91,
            date: '2021-04-29T20:31:09Z',
            catalog: 'GMC',
            numOrder: 6,
            description: 'Envoy XUV',
            amount: 45760,
            price: 43326,
            info: '3C6JD7CT7CG635280',
            status: 2005,
            delivery: '2021-02-16T14:00:38Z',
        },
        {
            check: 32,
            date: '2021-06-19T06:04:38Z',
            catalog: 'Mitsubishi',
            numOrder: 40,
            description: 'Tredia',
            amount: 10352,
            price: 43374,
            info: '2G4GS5EK7C9902733',
            status: 1984,
            delivery: '2021-02-17T17:13:47Z',
        },
        {
            check: 33,
            date: '2021-07-04T02:27:22Z',
            catalog: 'Chevrolet',
            numOrder: 50,
            description: 'Silverado 2500',
            amount: 11000,
            price: 27918,
            info: 'WBAWC7C55AP177053',
            status: 2002,
            delivery: '2021-05-30T23:00:17Z',
        },
        {
            check: 46,
            date: '2021-07-03T16:52:36Z',
            catalog: 'Saturn',
            numOrder: 38,
            description: 'Ion',
            amount: 41796,
            price: 38994,
            info: 'WA1LGBFE6BD700490',
            status: 2003,
            delivery: '2021-06-05T01:05:46Z',
        },
        {
            check: 42,
            date: '2021-10-24T10:55:31Z',
            catalog: 'Ford',
            numOrder: 83,
            description: 'LTD',
            amount: 16184,
            price: 49810,
            info: '1G6AZ5S37F0765913',
            status: 1986,
            delivery: '2021-04-24T17:54:18Z',
        },
        {
            check: 53,
            date: '2021-04-10T08:54:37Z',
            catalog: 'Lexus',
            numOrder: 83,
            description: 'RX',
            amount: 49611,
            price: 20479,
            info: 'WVWAA7AHXAV742294',
            status: 2007,
            delivery: '2021-01-24T01:21:59Z',
        },
        {
            check: 25,
            date: '2021-05-11T13:22:39Z',
            catalog: 'Toyota',
            numOrder: 35,
            description: 'FJ Cruiser',
            amount: 41538,
            price: 9975,
            info: '1G6KD54YX5U851333',
            status: 2009,
            delivery: '2021-07-23T19:05:24Z',
        },
        {
            check: 30,
            date: '2021-04-30T11:42:29Z',
            catalog: 'Ford',
            numOrder: 27,
            description: 'Excursion',
            amount: 38799,
            price: 46608,
            info: '5UXFA53562L140355',
            status: 2003,
            delivery: '2021-09-22T02:20:15Z',
        },
        {
            check: 5,
            date: '2021-11-19T14:08:33Z',
            catalog: 'Lexus',
            numOrder: 56,
            description: 'IS',
            amount: 13385,
            price: 16060,
            info: 'SCBBR9ZA2BC360535',
            status: 2007,
            delivery: '2021-03-09T08:47:14Z',
        },
        {
            check: 24,
            date: '2021-06-03T08:57:54Z',
            catalog: 'Toyota',
            numOrder: 77,
            description: 'Yaris',
            amount: 46956,
            price: 26404,
            info: '1G6KE54Y75U261507',
            status: 2012,
            delivery: '2021-10-26T16:54:29Z',
        },
    ];
    const data = useMemo(() => dataMock, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Счёт',
                accessor: 'check',
                disableSortBy: true,
            },
            {
                Header: 'Дата',
                accessor: 'date',
                disableSortBy: true,
                Cell: formattingDate,
            },
            {
                Header: 'Каталог',
                accessor: 'catalog',
                disableSortBy: true,
            },
            {
                Header: '№ заказа',
                accessor: 'numOrder',
                disableSortBy: true,
            },
            {
                Header: 'Описание',
                accessor: 'description',
                disableSortBy: true,
            },
            {
                Header: 'З/В',
                accessor: 'amount',
                disableFilters: true,
            },
            {
                Header: 'Цена',
                accessor: 'price',
                disableFilters: true,
            },
            {
                Header: 'Информация',
                accessor: 'info',
                disableSortBy: true,
                disableFilters: true,
            },
            {
                Header: 'Статус',
                accessor: 'status',
                disableSortBy: true,
                Filter: SelectFilter,
            },
            {
                Header: 'Доставка',
                accessor: 'delivery',
                disableFilters: true,
                Cell: formattingDate,
            },
        ],
        [],
    );

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultFilter,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,       // Instead of using 'rows', we'll use page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize},
    } = useTable({
            columns,
            data,
            defaultColumn,
            initialState: {pageIndex: 0},
        },
        useFilters,
        useSortBy,
        usePagination,
    );

    return (
        <MainLayout>
            <S.Order>
                <C.Container>
                    <SectionTitle title="Заказы" shadow={false}/>
                    <S.OrderInner>
                        <table {...getTableProps()}>
                            <thead>
                            {
                                // Loop over the header rows
                                headerGroups.map(headerGroup => (
                                    // Apply the header row props
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            // Loop over the headers in each row
                                            headerGroup.headers.map(column => (
                                                // Apply the header cell props
                                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                    {
                                                        // Render the header
                                                        column.render('Header')
                                                    }
                                                    {/* Add a sort direction indicator */}
                                                    <span>
                                                          {
                                                              column.isSorted
                                                                  ? column.isSortedDesc
                                                                      ? ' 🔽' : ' 🔼'
                                                                  : column.canSort &&
                                                                  <img src='./images/sort-icon-default.svg'/>
                                                          }
                                                    </span>
                                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                                </th>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                            </thead>
                            {/* Apply the table body props */}
                            <tbody {...getTableBodyProps()}>
                            {
                                // Loop over the table rows
                                page.map(row => {
                                    // Prepare the row for display
                                    prepareRow(row);
                                    return (
                                        // Apply the row props
                                        <tr {...row.getRowProps()}>
                                            {
                                                // Loop over the rows cells
                                                row.cells.map(cell => (
                                                    // Apply the cell props
                                                    <td {...cell.getCellProps()}>
                                                        {
                                                            // Render the cell contents
                                                            cell.render('Cell')
                                                        }
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        </table>

                        <div className="pagination">
                            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                                {'<<'}
                            </button>
                            {' '}
                            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                                {'<'}
                            </button>
                            {' '}
                            <button onClick={() => nextPage()} disabled={!canNextPage}>
                                {'>'}
                            </button>
                            {' '}
                            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                                {'>>'}
                            </button>
                            {' '}
                            <span>
                                Page{' '}
                                <strong>
                                 {pageIndex + 1} of {pageOptions.length}
                                    </strong>{' '}
                            </span>
                            <span>
                                | Go to page:{' '}
                                <input
                                    type="number"
                                    defaultValue={pageIndex + 1}
                                    onChange={e => {
                                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                                        gotoPage(page)
                                    }}
                                    style={{width: '100px'}}
                                />
                            </span>{' '}
                            <select
                                value={pageSize}
                                onChange={e => {
                                    setPageSize(Number(e.target.value))
                                }}
                            >
                                {[10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </S.OrderInner>
                </C.Container>
            </S.Order>
        </MainLayout>
    );
};
