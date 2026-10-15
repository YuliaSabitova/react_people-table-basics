import { useParams } from 'react-router-dom';
import { Person } from '../../types';
import { PeopleLink } from '../peopleLink/PeopleLink';

type Props = { people: Person[] };

export const PeopleTabs = ({ people }: Props) => {

  const { slug } = useParams();

  return (
            <table
              data-cy="peopleTable"
              className="table is-striped is-hoverable is-narrow is-fullwidth"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sex</th>
                  <th>Born</th>
                  <th>Died</th>
                  <th>Mother</th>
                  <th>Father</th>
                </tr>
              </thead>

              <tbody>
                {people.map((person) => (
                  <tr
                    data-cy="person"
                    key={person.slug}
                    className={slug === person.slug ? 'has-background-warning' : ''}
                  >
                    <td>
                      <PeopleLink person={person} />
                    </td>

                    <td>{person.sex}</td>
                    <td>{person.born}</td>
                    <td>{person.died}</td>

                    <td>
              {person.mother ? (
                <PeopleLink person={person.mother} />
              ) : (
                person.motherName || '-'
              )}
            </td>
            <td>
              {person.father ? (
                <PeopleLink person={person.father} />
              ) : (
                person.fatherName || '-'
              )}
            </td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        };

