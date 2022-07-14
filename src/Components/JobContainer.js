import Jobs from './Jobs'

export default function JobContainer({listing, filtering}) {

    return (
    
        <div style={{marginTop: '40px'}}>
            <Jobs
                key={listing.id} 
                logo={listing.logo}
                company={listing.company}
                new={listing.new}
                role={listing.role}
                level={listing.level}
                featured={listing.featured}
                position={listing.position}
                postedAt={listing.postedAt}
                contract={listing.contract}
                languages={listing.languages}
                tools={listing.tools}
                location={listing.location}
                filter_f={filtering}
            />
            
        </div>
    
    )
}