'use client'

import React from 'react'
import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'
import { Category } from '../../../../payload/payload-types'
import CheckBox from '../../../_components/CheckBox'
import { HR } from '../../../_components/HR'
import RadioButton from '../../../_components/RadioButton'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, setCategoryFilters, sort, setSort } = useFilter()

  const handleCategories = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      const updateCategories = categoryFilters.filter(id => id !== categoryId)

      setCategoryFilters(updateCategories)
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }
  const handleSort = (value: string) => setSort(value)
  return (
    <div className={classes.filter}>
      <div className={classes.title}>
        <h6>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id)

            // return
            return (
              <CheckBox
                label={category.title}
                value={category.id}
                key={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}>Sort By</h6>
        <div className={classes.categories}>
          <RadioButton
            label={'Latest'}
            value={'-createdAt'}
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSort}
            groupName={'sort'}
          />
          <RadioButton
            label={'Oldest'}
            value={'createdAt'}
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSort}
            groupName={'sort'}
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
