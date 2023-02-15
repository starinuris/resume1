import React from 'react'

const WorkHistory = () => {
  return (
    <div className='container history'>
      <div className='workButtons'>
        <div className='btn-group'>
          <button type='button' className='btn btn-danger'>
            2021-2022
          </button>
          <button
            type='button'
            className='btn btn-danger dropdown-toggle dropdown-toggle-split'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <span className='visually-hidden'>Toggle Dropdown</span>
          </button>
          <ul className='dropdown-menu'>
            <li>
              <p className='dropdown-item h2'>DOCUMENT MANAGEMENT SPECIALIST</p>
            </li>
            <li className='dropdown-item h4'>
              CITY OF PEMBROKE PINES
              <a href='https://www.ppines.com/' className='ms-3'>
                https://www.ppines.com
              </a>
            </li>
            <li className='dropdown-item'>
              <hr className='dropdown-divider' />
            </li>
            <li className='dropdown-item'>
              Processed public requests for property plans
            </li>
            <li className='dropdown-item'>
              Prepared microfilms, paper documents, and other types of records
              for back-scan outsourcing
            </li>
            <li className='dropdown-item'>
              Liaison between outsourcing companies and city departments
            </li>
            <li className='dropdown-item'>
              Added/scanned documents to OnBase program
            </li>
            <li className='dropdown-item'>
              Prepared documents for disposition
            </li>
            <li className='dropdown-item'>
              Maintained records in the Archives
            </li>
            <li className='dropdown-item'>
              User/User Groups Administration for OnBase
            </li>
            <li className='dropdown-item'>Passport Agent</li>
          </ul>
        </div>
        <div className='btn-group'>
          <button type='button' className='btn btn-primary'>
            2018-2021
          </button>
          <button
            type='button'
            className='btn btn-primary dropdown-toggle dropdown-toggle-split'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <span className='visually-hidden'>Toggle Dropdown</span>
          </button>
          <ul className='dropdown-menu'>
            <li>
              <p className='dropdown-item h2'>MANAGER/PRESIDENT</p>
              <p className='dropdown-item h4'>BTS WORLD, INC DBA BEAUTY ZONE</p>
            </li>
            <li>
              <p className='dropdown-item'>PEMBROKE PINES, FL</p>
            </li>
            <li className='dropdown-item'>
              <hr className='dropdown-divider' />
            </li>
            <li className='dropdown-item'>
              Converted the business to a corporation
            </li>
            <li className='dropdown-item'>
              initiated social media marketing
              <a
                className='ms-3'
                href='https://www.instagram.com/beautyzonehair'
                target='_blank'
                rel='noreferrer'
              >
                https://www.instagram.com/beautyzonehair
              </a>
            </li>
            <li className='dropdown-item'></li>
            <li className='dropdown-item'>
              Built database of products for POS system
            </li>
            <li className='dropdown-item'>
              Reviewed financial statements, sales or activity reports, or other
              performance data to measure productivity or goal achievement and
              to identify areas needing cost reduction or program improvements
            </li>
            <li className='dropdown-item'>
              Directed and coordinated activities of business, such as pricing
              and sales
            </li>
            <li className='dropdown-item'>
              Prepared staff work schedules and assigned specific duties
            </li>
            <li className='dropdown-item'>
              Monitored suppliers to ensure that they efficiently and
              effectively provide needed goods or services within budgetary
              limits
            </li>
          </ul>
        </div>
        <div className='btn-group'>
          <button type='button' className='btn btn-secondary'>
            1999-2017
          </button>
          <button
            type='button'
            className='btn btn-secondary dropdown-toggle dropdown-toggle-split'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <span className='visually-hidden'>Toggle Dropdown</span>
          </button>
          <ul className='dropdown-menu'>
            <li>
              <p className='dropdown-item h2'>MANAGER / OWNER</p>
              <p className='dropdown-item h4'>
                BEAUTY ZONE HAIR & BEAUTY SUPPLY
              </p>
              <p className='dropdown-item'>PEMBROKE PINES, FL</p>
            </li>
            <li className='dropdown-item'>
              <hr className='dropdown-divider' />
            </li>
            <li className='dropdown-item'>Launched the business </li>
            <li className='dropdown-item'>
              Managed day-to-day business operations, including sales,
              accounting, finance, HR, marketing, and public relations
            </li>
            <li className='dropdown-item'>
              Successfully increased sales and expanded the business to a larger
              facility
            </li>
          </ul>
        </div>
      </div>

      <h3>2021-2022</h3>
      <h5>DOCUMENT MANAGEMENT SPECIALIST, CITY OF PEMBROKE PINES</h5>
      <a href='https://www.ppines.com/' target='_blank' rel='noreferrer'>
        https://www.ppines.com/
      </a>
      <ul>
        <li>Processed public requests for property plans</li>
        <li>
          Prepared microfilms, paper documents, and other types of records for
          back-scan outsourcing
        </li>
        <li>Liaison between outsourcing companies and city departments</li>
        <li>Added/scanned documents to OnBase program</li>
        <li>Prepared documents for disposition</li>
        <li>Maintained records in the Archives</li>
        <li>User/User Groups Administration for OnBase</li>
        <li>Passport Agent</li>
      </ul>
      <h3>2018-2021</h3>
      <h5>MANAGER/PRESIDENT, BTS WORLD, INC DBA BEAUTY ZONE (PEMBROKE PINES)</h5>
      <ul>
        <li>Converted the business to a corporation</li>
        <li>initiated social media marketing{'  '}</li>
        <a
          href='https://www.instagram.com/beautyzonehair'
          target='_blank'
          rel='noreferrer'
        >
          https://www.instagram.com/beautyzonehair
        </a>
        <li>Built database of products for POS system</li>
        <li>
          Reviewed financial statements, sales or activity reports, or other
          performance data to measure productivity or goal achievement and to
          identify areas needing cost reduction or program improvements
        </li>
        <li>
          Directed and coordinated activities of business, such as pricing and
          sales
        </li>
        <li>Prepared staff work schedules and assigned specific duties</li>
        <li>
          Monitored suppliers to ensure that they efficiently and effectively
          provide needed goods or services within budgetary limits
        </li>
      </ul>
      <h3>1999-2017</h3>
      <h5>
        MANAGER/OWNER, BEAUTY ZONE HAIR & BEAUTY SUPPLY (PEMBROKE PINES, FL)
      </h5>
      <ul>
        <li>Launched the business </li>
        <li>
          Managed day-to-day business operations, including sales, accounting,
          finance, HR, marketing, and public relations
        </li>
        <li>
          Successfully increased sales and expanded the business to a larger
          facility
        </li>
      </ul>
    </div>
  )
}

export default WorkHistory
