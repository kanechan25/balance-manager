import React from 'react'
import { Autocomplete, Checkbox, Popper, TextField } from '@mui/material'
import { styled } from '@mui/system'
import { CHAIN_KEYS, CHAIN_VALUE_KEYS, supportChains } from 'constants/index'
import { OptionChains } from 'types'
import { RootState } from 'redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSupportchains } from '../redux/appSlice'

const StyledAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-inputRoot {
    padding: 6px 12px;
    border-radius: 12px;
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

  const [selectedOptions, setSelectedOptions] = React.useState<OptionChains[]>([currentSupportChains[0]])

  const handleChange = (event: React.SyntheticEvent, newValue: OptionChains[] | null) => {
    if (newValue) {
      setSelectedOptions(newValue)
      dispatch(setSupportchains(newValue))
    }
  }
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
