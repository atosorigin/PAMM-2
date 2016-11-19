package pamm.infrastructure.filter;

import play.api.mvc.EssentialFilter;
import play.filters.headers.SecurityHeadersFilter;
import play.http.HttpFilters;
import play.filters.gzip.GzipFilter;
import javax.inject.Inject;

public class DefaultFilter implements HttpFilters{

    private final GzipFilter gzip;
    private SecurityHeadersFilter securityHeadersFilter;

    @Inject
    public DefaultFilter(GzipFilter gzip, SecurityHeadersFilter securityHeadersFilter) {
        this.gzip = gzip;
        this.securityHeadersFilter = securityHeadersFilter;
    }

    @Override
    public EssentialFilter[] filters() {
        return new EssentialFilter[] {
                gzip,
                securityHeadersFilter
        };
    }

}