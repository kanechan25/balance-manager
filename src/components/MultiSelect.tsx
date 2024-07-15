import React, { useCallback } from 'react'
import { Autocomplete, Checkbox, Popper, TextField } from '@mui/material'
import { styled } from '@mui/system'
import { CHAIN_KEYS, CHAIN_VALUE_KEYS, supportChains } from 'constants/index'
import { OptionChains } from 'types'
import { RootState } from 'redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSupportChains, setSupportChainId } from '../redux/appSlice'
import { getSupportChainIdsFromMultiSelect } from 'helper/index'

const StyledAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-inputRoot {
    padding: 6px 12px;
    border-radius: 12px;
  }
  .MuiInputBase-root {
    background-color: #e5e5e5;
  }
`
const CustomPopper = styled(Popper)`
  .MuiAutocomplete-listbox {
    max-height: 280px;
    overflow-y: auto;
  }
`
const MultiSelect: React.FC = () => {
  const dispatch = useDispatch()
  const currentSupportChains = useSelector((state: RootState) => state.app.supportChains)

  const [selectedOptions, setSelectedOptions] = React.useState<OptionChains[]>(currentSupportChains)

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: OptionChains[] | null) => {
      if (newValue) {
        const uniqueNewValue = newValue.filter(
          (option, index, self) => index === self.findIndex((t) => t.value === option.value && t.label === option.label),
        )
        const arrayChainKeys: number[] = getSupportChainIdsFromMultiSelect(uniqueNewValue)
        setSelectedOptions(uniqueNewValue)
        dispatch(setSupportChains(uniqueNewValue))
        dispatch(setSupportChainId(arrayChainKeys))
      }
    },
    [currentSupportChains],
  )
  return (
    <StyledAutocomplete
      multiple
      options={supportChains}
      disableCloseOnSelect
      getOptionLabel={(option) => (option as OptionChains).label}
      renderOption={(props, option, { selected }) => {
        const opt = option as OptionChains
        return (
          <li {...props}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {opt.label}
          </li>
        )
      }}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
      PopperComponent={CustomPopper}
      value={selectedOptions}
      onChange={(event, value) => handleChange(event, value as OptionChains[])}
    />
  )
}

export default MultiSelect
