import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomMatPaginator(): MatPaginatorIntl {
    const customPaginatorIntl = new MatPaginatorIntl();
    customPaginatorIntl.nextPageLabel = '';
    customPaginatorIntl.previousPageLabel = '';
    return customPaginatorIntl;
}
