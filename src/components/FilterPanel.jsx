import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from 'store/filters/filters-selectors';
import { clearFilter, removeFilter } from 'store/filters/filters-actions';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilters.map((filter) => {
            return (
              <Badge key={filter} variant='clearable' onClear={() => dispatch(removeFilter(filter))}>
                {filter}
              </Badge>
            );
          })}
        </Stack>
        <button className='link' onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
