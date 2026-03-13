import React, { useMemo } from 'react'
import { ListView } from '@/components/refine-ui/views/list-view'
import { Breadcrumb } from '@/components/refine-ui/layout/breadcrumb'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DEPARTMENT_OPTIONS } from '@/constants'
import { CreateButton } from '@/components/refine-ui/buttons/create'
import { useTable } from '@refinedev/react-table'
import { Subject } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { DataTable } from '@/components/refine-ui/data-table/data-table'

const SubjectsList = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedDepartment, setSelectedDepartment] = React.useState('all');
    const departmentFilter = selectedDepartment === 'all' ? [] : [
        {
            field: 'department',
            operator: 'eq' as const,
            value: selectedDepartment,
        }
    ]
    const searchFilter = searchQuery ? [
        {
            field: 'name',
            operator: 'contains' as const,
            value: searchQuery,
        }
    ] : []
    const subjectTable = useTable<Subject>({
      columns: useMemo<ColumnDef<Subject>[]>(
        () => [
          {
            id: "code",
            size: 100,
            accessorKey: "code",
            header: () => <p className="column-title ml-2">Code </p>,
            cell: ({ getValue }) => <Badge>{getValue<string>()} </Badge>,
          },
          {
            id: "name",
            size: 200,
            accessorKey: "name",
            header: () => <p className="column-title ">Name </p>,
            cell: ({ getValue }) => (
              <span className="text-foreground">{getValue<string>()} </span>
            ),
            filterFn: "includesString",
          },
          {
            id: "department",
            size: 150,
            accessorKey: "department",
            header: () => <p className="column-title ">Department </p>,
            cell: ({ getValue }) => (
              <Badge variant={"secondary"}>{getValue<string>()} </Badge>
            ),
          },
          {
            id: "description",
            size: 300,
            accessorKey: "description",
            header: () => <p className="column-title ">Description </p>,
            cell: ({ getValue }) => (
              <span className="truncate line-clamp-2">{getValue<string>()} </span>
            ),
          
          },
        ],
        [],
      ),
      refineCoreProps: {
        resource: "subjects",
        pagination: {
          pageSize: 10,
          mode: "server",
        },
          filters: {
            permanent:[...departmentFilter, ...searchFilter]
        },
          sorters: {
              initial: [
                  {field:'id', order:'desc'},
              ]
        },
      },
    });
  return (
    <ListView>
          <Breadcrumb />
          <h1 className='page-title'>
            Subjects List
          </h1>
          <div className="intro-row">
              <p>Quick access to essential metrics and management tools</p>
              <div className="actions-row">
                  <div className="search-field">
                      <Search className='search-icon' />
                      <Input type='text' placeholder='Search by name' className='pl-10 w-full'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      />
                  </div>
                  <div className="flex gap-2 w-full sm:auto">
                      <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                          <SelectTrigger>
                              <SelectValue placeholder="Filter by department" />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectItem value='all'>
                                    All Departments
                              </SelectItem>
                              {
                                  DEPARTMENT_OPTIONS?.map((department) => (
                                    <SelectItem key={department.value} value={department.value}>
                                        {department.label}
                                    </SelectItem>
                                  ))
                            }
                          </SelectContent>
                      </Select>
                      <CreateButton />
                  </div>
                  </div>
          </div>
<DataTable
    table={subjectTable}
/>
    </ListView>
  )
}

export default SubjectsList
