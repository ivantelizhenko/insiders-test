import Table from './Table';
import UsersLists from '../features/users/userTable/UsersLists';

function UsersTable() {
  return (
    <>
      <Table>
        <Table.HeadingsContainer>
          <Table.TableHeading as="h5">Full Name</Table.TableHeading>
          <Table.TableHeading as="h5">Department</Table.TableHeading>
          <Table.TableHeading as="h5">Country</Table.TableHeading>
          <Table.TableHeading as="h5">Status</Table.TableHeading>
          <Table.TableHeading as="div"> </Table.TableHeading>
        </Table.HeadingsContainer>
        <Table.TableList>
          <UsersLists />
        </Table.TableList>
      </Table>
    </>
  );
}

export default UsersTable;
