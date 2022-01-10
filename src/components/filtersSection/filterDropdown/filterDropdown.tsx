import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import cssStyles from './filterDropDown.module.css';
import classnames from 'classnames';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg';
import { ReactComponent as CheckIcon } from '../../../assets/icons/check-mark.svg';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../state/filters/actions';
import { IFilterOption } from "../../../state/types";

interface IFilterDropDownProps {
    title: string;
    heading: string;
    labels: IFilterOption[];
    selectionValue: IFilterOption;
    noSearch?:boolean;
    type: string;
}

const FilterDropdown = (props: IFilterDropDownProps):JSX.Element => {
    const { labels, noSearch = false, selectionValue, title, heading, type } = props;
    const  dispatch = useDispatch();
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [referenceElement, setReferenceElement] = useState<HTMLSpanElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
        placement: 'bottom-start'
    });

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
    }
    const setSelectedValue = (option: IFilterOption) => {
        if(option.code === selectionValue.code) {
            dispatch(setFilter({filterKey: type, filterValue: {} as IFilterOption}));
        } else {
            dispatch(setFilter({filterKey: type, filterValue: option}));
        }
        setIsOpen(false)
        console.log(option)
    }
    const toggleOpen = ( ) => {
        setIsOpen((state) => !state);
    }
    return (
        <>
            <span  ref={setReferenceElement} onClick={toggleOpen}>
                <span  className={cssStyles.filterText}>
                    {title}: {selectionValue && selectionValue.name ? selectionValue.name : 'Any'}
                    {isOpen ? <ArrowUp className={cssStyles.arrowIcon} /> : <ArrowDown className={cssStyles.arrowIcon} />}
                </span>

            </span>

            <div  className={ classnames(cssStyles.tooltip, { [cssStyles.tooltipIsHidden]: !isOpen })} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                <div className={cssStyles.tooltipBody}>
                    <span className={cssStyles.tooltipHeader}>
                        {heading}
                    </span>
                    {!noSearch && (<span className={cssStyles.searchRow}>
                        <input type="text" className={cssStyles.searchInput} onChange={handleSearch} placeholder={`Filter ${title}`} />
                        </span>)
                    }
                    <div className={cssStyles.list}>
                        {labels?.filter((item) => item.name.includes(searchTerm)).map((item) => {
                            const  isSelected = item.code === selectionValue.code;
                            return (<span key={item.code} onClick={() => setSelectedValue(item) } className={classnames(cssStyles.listItem, {
                                [cssStyles.isSelected]: isSelected
                            })}>
                              {isSelected && <CheckIcon className={cssStyles.checkIcon}/>}  {item.name}
                            </span>)
                        })}
                    </div>

                </div>
                <div ref={setArrowElement} style={styles.arrow} />
            </div>
        </>
    );
}

export default FilterDropdown;