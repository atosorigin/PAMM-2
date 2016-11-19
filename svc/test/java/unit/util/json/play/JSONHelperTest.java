package util.json.play;

import org.junit.Assert;
import org.junit.Test;
import pamm.infrastructure.util.JSONHelper;

public class JSONHelperTest
{
    private JSONHelperBuilder builder = new JSONHelperBuilder();

    @Test
    public void testCreateValidObjectFromJSON()
    {
        JSONHelper jsonHelper = new JSONHelper();

        JSONHelperTestClass testObj = jsonHelper.getObjectForJSON(JSONHelperBuilder.VALID_TEST_CLASS_JSON,
                JSONHelperTestClass.class);

        Assert.assertNotNull(testObj);

        Assert.assertEquals(testObj.getTestProp1(), JSONHelperBuilder.PROP1);

        Assert.assertEquals(testObj.getTestProp2(), JSONHelperBuilder.PROP2);
    }

    @Test
    public void testCreateJSONFromValidObject()
    {
        JSONHelper jsonHelper = new JSONHelper();

        String jsonString = jsonHelper.getJSONForObject(builder.getValidTestClassObject());

        Assert.assertNotNull(jsonString);

        Assert.assertEquals(jsonString, JSONHelperBuilder.VALID_TEST_CLASS_JSON);
    }

}
